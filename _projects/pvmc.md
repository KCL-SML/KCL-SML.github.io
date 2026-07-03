---
layout: custom-project
title: Parallel Variational Monte Carlo (PVMC)
description: Efficient Learning of Deep State Space Models via Importance Smoothing
img: assets/img/pvmc/pvmc-diagram.png
redirect: 
importance: 2
category: Projects
include_description: true
authors:
  - John-Joseph Brady <sup>1</sup>
  - Nikolas Nüsken <sup>2</sup>
  - Yunpeng Li <sup>1</sup>
institutions:
  - Centre for Oral, Clinical and Translational Sciences, King's College London
  - Department of Mathematics, King's College London
venue: International Conference on Machine Learning (ICML) 2026
venue_link: https://icml.cc/
main_pdf: https://arxiv.org/abs/2605.21108
arxiv: https://arxiv.org/abs/2605.21108
github: https://github.com/John-JoB/parallel-variational-sequential-monte-carlo
abstract: Latent state space systems are ubiquitous in statistical modelling, arising naturally when time series are observed through noisy measurements. However, training deep state space models (DSSMs) at scale remains difficult. Two largely distinct strategies have emerged for training DSSMs. The first, auto-encoding DSSMs, trains generative models by optimising a variational lower bound. The second backpropagates through the outputs of classical sequential Monte Carlo (SMC) algorithms. Such approaches can train DSSMs for both discriminative and generative tasks, but their inherently sequential forward passes scale poorly on modern hardware. We propose parallel variational Monte Carlo (PVMC), a new training method that bridges these paradigms and robustly trains DSSMs for both discriminative and generative tasks. Across a set of benchmark experiments, PVMC matches or exceeds state-of-the-art performance while training 10× faster than the fastest competing SMC-based approach.
images:
  slider: true
---

### **Background**
State-space models (SSMs) provide a general framework for describing time-evolving systems, in which an unobserved latent state evolves according to Markovian dynamics and observations are generated conditionally on that state. Owing to this flexibility, SSMs are applied across domains as varied as target tracking, option pricing, ecology, meteorology, and neuroscience.

Training becomes considerably more difficult once the transition and observation models are parameterised by neural networks, yielding a *deep* state space model (DSSM). Two largely distinct paradigms have emerged for this purpose. Auto-encoding DSSMs frame the SSM as a variational auto-encoder (VAE) and optimise a variational lower bound; this permits fully parallel, scalable training but yields loose bounds and is poorly suited to supervised or semi-supervised objectives. Differentiable sequential Monte Carlo (DSMC) instead backpropagates through a particle filter, naturally supporting supervised losses and providing tighter bounds, but its resampling step imposes an inherently sequential forward pass that scales poorly on modern hardware.

This leaves an open question: whether the parallel efficiency of the auto-encoding approach can be combined with the tighter bounds and supervised training afforded by sequential Monte Carlo.

<hr style="height:10px;"/>

### **Parallel Variational Monte Carlo**
We propose parallel variational Monte Carlo (PVMC), a training method that bridges the two paradigms and inherits the strengths of each. As with auto-encoding DSSMs, PVMC dispenses with the sequential proposal mechanism of particle filtering, enabling efficient parallel execution of the forward pass. As with DSMC, it constructs an importance-weighted approximation to the posterior over latent states, thereby supporting supervised training and the learning of meaningful latent representations.

In contrast to DSMC, rather than targeting the online *filtering* posterior, the state at time $t$ conditioned on observations up to $t$, PVMC targets the **marginal smoothing posterior**, the distribution of the latent state at each time-step conditioned on the entire observation sequence. Particles are sampled independently at every time-step and subsequently reweighted to approximate this smoothing distribution, accounting for every trajectory that can be formed through the set of proposed particles.

<style>
/* Inset slide images so the nav arrows sit in the gutter, not over the image */
.pvmc-slider swiper-slide { padding: 0 3rem; box-sizing: border-box; }
</style>

<div class="w-75 ml-0 mr-0 mx-auto pvmc-slider">
  <swiper-container style="--swiper-navigation-sides-offset: 0px;" keyboard="true" navigation="true" pagination="true" pagination-clickable="true" pagination-dynamic-bullets="true" rewind="true" centered-slides="true" autoplay-delay="5000">
    <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/PVMC/PVMC_weights.png" class="img-fluid rounded"
      caption="PVMC weighting strategy. Key: Red=sampling; Blue=weighting; Grey=deterministic function." min-height="500px" max-height="600px" %}</swiper-slide>
    <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/PVMC/DSMC_weights.png" class="img-fluid rounded"
      caption="DSMC weighting strategy. Key: Red=sampling; Blue=weighting; Grey=deterministic function." min-height="500px" max-height="600px" %}</swiper-slide>
    <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/PVMC/VAEDSSM_weights.png" class="img-fluid rounded"
      caption="VAE weighting strategy. Key: Red=sampling; Blue=weighting; Grey=deterministic function." min-height="500px" max-height="600px" %}</swiper-slide>
  </swiper-container>
</div>

Our contributions are threefold:

* We introduce **PVMC**, the first end-to-end differentiable particle *smoother* with unbiased gradient updates and a statistically consistent posterior approximation.
* We derive a new **evidence lower bound (ELBO)** for training generative DSSMs that is tighter than standard single-sample or importance-weighted objectives.
* We develop a **hardware-aware recursion** for the importance weights, based on parallel prefix and suffix scans, achieving a 10× speed-up over the fastest competing DSMC approach and up to 100× over unbiased DSMC approaches in our experiments on an NVIDIA RTX 4090 GPU.

<hr style="height:10px;"/>

### **Experiments Results**
We evaluate PVMC in three settings: a linear-Gaussian system for which exact smoothing is available, a nonlinear supervised state-estimation benchmark, and a real-world generative modelling task on financial time series.

#### **Linear-Gaussian — state estimation**
In this setting the exact marginal posterior is available via the Rauch-Tung-Striebel (RTS) smoother, allowing us to verify that PVMC's forward pass behaves as a Bayesian smoother. We compare against the Kalman filter, the classical two-filter smoother (TFS), and the parallel-in-time smoother d-SMC, and evaluate PVMC using both an analytic Kalman proposal and a learned neural proposal.

PVMC attains a substantially lower mean error relative to the exact posterior means than the baselines, while improving on the runtime of the sequential smoothing baseline TFS. The learned proposal matches the analytic one across all metrics, indicating that PVMC's ELBO gradients provide an effective learning signal.

| Method | $e_x$ | Time (s) | KSD |
|---|---|---|---|
| RTS Smoother | 0.0 | 0.14 | — |
| Kalman Filter | 0.132 | 0.13 | — |
| TFS | 0.501 | 25.9 | 0.410 |
| d-SMC | 0.44 | 4.00 | 2.21 |
| **PVMC (Kalman proposal)** | 0.054 | 1.88 | 0.200 |
| **PVMC (learned proposal)** | **0.052** | 1.50 | **0.199** |

<div class="caption">
    Comparison of PVMC and baseline approaches against the exact RTS smoother. We report the average L2 error to the exact posterior means, wall-clock time, and a kernelised Stein discrepancy (KSD) measuring posterior fidelity.
</div>

<div class="w-50 ml-0 mr-0 mx-auto pvmc-slider">
  <swiper-container style="--swiper-navigation-sides-offset: 0px;" keyboard="true" navigation="true" pagination="true" pagination-clickable="true" pagination-dynamic-bullets="true" rewind="true" centered-slides="true" autoplay-delay="5000">
    <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/PVMC/forward_time.png" class="img-fluid rounded"
      caption="Time cost of forward pass of all particle methods." min-height="300px" max-height="500px" %}</swiper-slide>
    <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/PVMC/backward_time.png" class="img-fluid rounded"
      caption="Time cost of backward pass of all differentiable particle methods." min-height="300px" max-height="500px" %}</swiper-slide>
  </swiper-container>
</div>

#### **Prey-predator model — state estimation**
We next consider a nonlinear, supervised setting: a stochastic Lotka-Volterra (prey-predator) model in which the observation process is known but the dynamics are parameterised by a learned neural network. We compare against differentiable particle filter baselines (Stop-gradient, Soft, Diffusion), the mixture density particle smoother (MDPS), and a P-VAE ablation that employs PVMC's importance sampler but trains with a standard VAE objective.

PVMC achieves the best overall results across all metrics — state-estimation error, filtering error, and distributional discrepancy — while training in under two minutes and converging reliably across all 20 seeds. The DSMC baselines are both slower and markedly less stable, frequently failing to converge.

| Method           | MSE | Filtering MSE | 2-SWD | Time (m:s) | Failures |
|------------------|---|---|---|---|---|
| Stop-gradient    | 0.83 ± 0.50 | 0.72 ± 0.46 | 14.8 ± 9.4 | 16:27 ± 0:35 | 2 |
| Soft             | 0.62 ± 0.42 | 0.58 ± 0.42 | 6.70 ± 4.30 | 15:32 ± 1:07 | 7 |
| Diffusion        | 0.52 ± 0.22 | 0.56 ± 0.16 | 10.2 ± 4.28 | 267:10 ± 5:20 | 0 |
| MDPS             | 1.20 ± 0.55 | 1.32 ± 0.64 | 13.5 ± 10.0 | 26:23 ± 0:14 | 14 |
| P-VAE (ablation) | 0.43 ± 0.06 | 1.21 ± 0.11 | 20.9 ± 2.6 | 1:49 ± 0:01 | 0 |
| **PVMC**         | **0.32 ± 0.04** | **0.40 ± 0.03** | **2.96 ± 0.74** | 1:49 ± 0:01 | 0 |

<div class="caption">
    Performance on the prey-predator state estimation task. Methods above the divider train via filtering; those below train via smoothing. Statistics are means and standard deviations over the successful runs (out of 20 repeats). PVMC is the fastest, most accurate and most stable.
</div>

#### **Financial time series — generative modelling**
Finally, we evaluate PVMC as a generative model on the daily close price of the S&P 500 Index (SPX), a setting in which no ground-truth latent state is assumed to exist. Here the latent variable is interpreted as a low-dimensional Markov summary of the state of the economy. We assess whether generated trajectories reproduce key stylised facts of the returns: volatility clustering, measured via the autocorrelation of absolute and squared daily returns, and distributional shape, measured via skewness and kurtosis. Baselines include the time-causal VAE (TC-VAE), the deep Markov model (DMM), a soft-resampling DPF, and the P-VAE ablation.

PVMC most consistently captures the short-term autocorrelation structure of SPX returns and produces skewness and kurtosis distributions closest to those observed in the real data. Neither DMM nor Soft-DPF captures the correlation structure, indicating a failure to learn meaningful temporal dynamics.

<div class="row justify-content-center">
    <div class="col-sm-6 col-md-6 col-lg-6 mt-3 mt-md-0">
        {% include figure.liquid loading="eager"
            path="assets/img/pvmc/Autocorrelation of absolute daily returns.png"
            class="img-fluid rounded z-depth-1" zoomable="true" %}
    </div>
    <div class="col-sm-6 col-md-6 col-lg-6 mt-3 mt-md-0">
        {% include figure.liquid loading="eager"
            path="assets/img/pvmc/Autocorrelation of squared daily returns.png"
            class="img-fluid rounded z-depth-1" zoomable="true" %}
    </div>
</div>
<div class="caption">
    Left: mean autocorrelation of absolute daily returns. Right: mean autocoreelation of squared daily returns.
</div>
<div class="row justify-content-center">
    <div class="col-sm-6 col-md-6 col-lg-6 mt-3 mt-md-0">
        {% include figure.liquid loading="eager"
            path="assets/img/pvmc/histogram_skewness.png"
            class="img-fluid rounded z-depth-1" zoomable="true" %}
    </div>
    <div class="col-sm-6 col-md-6 col-lg-6 mt-3 mt-md-0">
        {% include figure.liquid loading="eager"
            path="assets/img/pvmc/histogram_kurtosis.png"
            class="img-fluid rounded z-depth-1" zoomable="true" %}
    </div>
</div>
<div class="caption">
    Left: Skewness of daily returns. Right: Kurtosis of daily returns. Vertical black lines indicate the values for 6 disjoint 360 day trajectories of the real SPX.
</div>

<hr style="height:10px;"/>

### **Conclusion**
We introduced parallel variational Monte Carlo (PVMC), a training paradigm for deep state space models that combines parallel scalability with principled posterior inference. By targeting the marginal smoothing posterior through importance weighting rather than resampling, PVMC remains fully parallel while providing a statistically consistent smoother with unbiased gradient estimates. Across both simulated and real-world tasks, it robustly trains DSSMs for generative and discriminative objectives, achieving state-of-the-art accuracy while attaining an approximately 10× speed-up over the fastest baseline on the supervised state-estimation task.

<hr style="height:10px;"/>

### **BibTeX**
```bibtex
@inproceedings{brady2026pvmc,
   title     = {Efficient Learning of Deep State Space Models via Importance Smoothing},
   author    = {Brady, John-Joseph and N\"usken, Nikolas and Li, Yunpeng},
   booktitle = {Proceedings of the International Conference on Machine Learning ({ICML})},
   year      = {2026},
}
```
