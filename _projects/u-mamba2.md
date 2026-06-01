---
layout: custom-project
title: U-Mamba2 and U-Mamba2-SSL
description: Scaling State Space Models for Dental Anatomy Segmentation and Semi-supervised Tooth and Pulp Segmentation in CBCT
img: assets/img/u-mamba2/TF3_front.png
redirect: 
importance: 2
category: Projects
include_description: true
authors:
  - Zhi Qin Tan <sup>1</sup>
  - Xiatian Zhu<sup>2</sup>
  - Owen Addison<sup>1</sup>
  - Yunpeng Li <sup>1</sup>
institutions:
  - King's College London
  - University of Surrey
venue: MICCAI 2025 Oral and Dental Image aNalysis (ODIN) Workshop
venue_link: https://odin-workshops.org/2025/
main_pdf: https://doi.org/10.1007/978-3-032-20711-1_12
main_pdf2: https://doi.org/10.1007/978-3-032-20711-1_18
github: https://github.com/zhiqin1998/U-Mamba2
arxiv: https://arxiv.org/abs/2509.12069
arxiv2: https://arxiv.org/abs/2509.20154
abstract:  Cone-Beam Computed Tomography (CBCT) is a widely used 3D imaging technique in dentistry, providing volumetric information about the anatomical structures of jaws and teeth. Accurate segmentation of these anatomies is critical for clinical applications such as diagnosis and surgical planning, but remains time-consuming and challenging. In this paper, we present U-Mamba2, a new neural network architecture designed for multi-anatomy CBCT segmentation in the context of the ToothFairy3 challenge. U-Mamba2 integrates the Mamba2 state space models into the U-Net architecture, enforcing stronger structural constraints for higher efficiency without compromising performance. In addition, we integrate interactive click prompts with cross-attention blocks, pre-train U-Mamba2 using self-supervised learning, and incorporate dental domain knowledge into the model design to address key challenges of dental anatomy segmentation in CBCT. Extensive experiments, including independent tests, demonstrate that U-Mamba2 is both effective and efficient, securing first place in both tasks of the Toothfairy3 challenge. <br><br>Building on the powerful U-Mamba2 model, we introduce U-Mamba2-SSL, a semi-supervised learning framework that employs a multi-stage training strategy, for the STSR 2025 challenge. The framework first pre-trains U-Mamba2 in a self-supervised manner using a disruptive autoencoder. It then leverages unlabeled data through consistency regularization, where we introduce input and feature perturbations to ensure stable model outputs. Finally, a pseudo-labeling strategy is implemented with a reduced loss weighting to minimize the impact of potential errors. U-Mamba2-SSL achieved an average score of 0.789 and a DSC of 0.917 on the hidden test set, achieving first place in Task 1 of the STSR 2025 challenge.

images:
  slider: true
---

### **Background**
Cone-Beam Computed Tomography (CBCT) is a widely used imaging modality in dentistry. It provides comprehensive 3D volumetric information and excellent visualization of the orofacial region, including jaws, teeth, nerves. Accurate segmentation of individual anatomical structures in CBCT images is crucial in applications such as dental diagnosis, treatment, and surgical planning. However, manual segmentation of CBCT scans requires specialized training and is extremely time-consuming due to its three-dimensional nature, high resolution containing a massive number of voxels and the high variability across scans, making it impractical to scale up in practice. Thus, there is a strong demand for robust and efficient CBCT segmentation algorithms, as well as developing effective semi-supervised approaches with only limited labeled data while leveraging a large amount of unlabeled CBCT scans, to improve the accuracy and efficiency of dental care and ultimately lead to better patient outcomes. 

<div class="w-50 ml-0 mr-0 mx-auto">
  <swiper-container keyboard="true" navigation="true" pagination="true" pagination-clickable="true" pagination-dynamic-bullets="true" rewind="true" centered-slides="true" autoplay-delay="5000">
    <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/u-mamba2/TF3_left.png" class="img-fluid rounded"
      caption="CBCT image with labeled anatomies mask (ToothFairy3)" min-height="300px" max-height="350px" %}</swiper-slide>
    <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/u-mamba2/TF3_front.png" class="img-fluid rounded"
      caption="CBCT image with labeled anatomies mask (ToothFairy3)" min-height="300px" max-height="350px" %}</swiper-slide>
    <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/u-mamba2/TF3_right.png" class="img-fluid rounded"
      caption="CBCT image with labeled anatomies mask (ToothFairy3)" min-height="300px" max-height="350px" %}</swiper-slide>
  </swiper-container>
</div>

<hr style="height:10px;"/>

### **U-Mamba2**
We propose U-Mamba2, a hybrid CNN-SSD architecture for 3D image segmentation. U-Mamba2 extends the previous U-Mamba model by leveraging the Mamba2 SSD framework that simplifies the Mamba architecture with stronger constraints imposed on the hidden space structure. Mamba2 introduced several architectural changes to enable tensor and sequence parallelism, providing a significant speedup without compromising performance. Similar to U-Mamba, U-Mamba2 can effectively extract local spatial features via CNN and capture global long-range dependencies with Mamba2. We implement interactive click prompts with cross-attention blocks and incorporate several domain knowledge to address key challenges of dental anatomy segmentation in CBCT.

{% include figure.liquid loading="eager" path="assets/img/u-mamba2/u-mamba2-diagram.png" class="img-fluid rounded z-depth-1" %}

U-Mamba2 is inspired by U-Mamba, where we integrate the strengths of U-Net and Mamba2 to efficiently capture global information. U-Mamba2 follows a structure similar to U-Net, with a symmetric encoder-decoder architecture that extracts image features across multiple scales. Residual connections between the encoder and decoder blocks at each stage facilitate the fusion of low-level and high-level features. As convolutional operations are inherently localized, we leverage Mamba2 to enhance the vanilla U-Net's limited capability to model global long-range dependencies in images by treating the features as long sequences. Similar to Mamba, Mamba2 scales linearly with sequence length but leverages the SSD framework to constrain the internal recurrent structure and uses matrix multiplication instead of selective scan, thereby improving efficiency through parallelism.

Furthremore, we incorporate several domain knowledge into the model design to address key challenges of dental anatomy segmentation in CBCT, in the scope of the ToothFairy3 challenge. This includes label smoothing of related anatomies, weighted loss for tiny structures, left-right mirroring augmentation and post-processing based on structure volume.

<hr style="height:10px;"/>

### **U-Mamba2-SSL**
We extend the implementation of U-Mamba2 for semi-supervised learning and propose the U-Mamba2-SSL. At the high-level, the U-Mamba2-SSL framework consists of three training stages where we first pre-train the U-Mamba2 model with reconstruction objectives, then combine supervised loss for the labeled data and unsupervised loss with consistency regularization for the unlabeled data. The final third stage introduces pseudo labeling to the training objectives. 

{% include figure.liquid loading="eager" path="assets/img/u-mamba2/u-mamba2-ssl-diagram.png" class="img-fluid rounded z-depth-1" %}

To exploit the vast amount of unlabeled CBCT data, we first pre-train U-Mamba2 with the disruptive autoencoder on all provided data. Then, the second training stage involves using the labeled data for supervised learning and the unlabeled data for unsupervised learning via consistency regularization techniques in the input and feature spaces. Lastly, the final stage introduces the pseudo labeling method to the training procedure of the previous stage, with a lower loss weight to further optimize the model weights.

<hr style="height:10px;"/>

### **Experiments Results**
We visualizes the qualitative comparison between the ground truth and our model's predictions of the scans with the highest and lowest Dice score, in the top and bottom rows, respectively, for our internal validation set of the ToothFairy3 Challenge (U-Mamba2) and the validaton set of the STSR 2025 challenge (U-Mamba2-SSL). 

#### **U-Mamba2**
For ToothFairy3, we observe that in most cases, U-Mamba2 produces precise segmentation predictions, showcasing the effectiveness of incorporating dental domain knowledge into the model design. Furthermore, we observe that U-Mamba2 can accurately localize the three tiny structures (incisive and lingual nerves), producing visually acceptable segmentations. In the worst-case scenario, although the scan is imperfect due to image artifacts caused by metallic objects, false positives are primarily confined around the image edge or confusion between the actual tooth and the crown or implant, underscoring U-Mamba2's robustness under noisy conditions.

<div class="container">
  <div class="row">
    <span>Qualitative results of U-Mamba2 on the validation set of Task 1. The 3D render and a representative 2D slice are shown for: (Top) the best scoring case and (Bottom) the worst scoring case.</span>
  </div>
  <div class="row">
    <div class="col px-2">{% include figure.liquid loading="eager" path="assets/img/u-mamba2/tf3/best_3d_gt.png" class="img-fluid rounded z-depth-1" zoomable="true" %}</div>
    <div class="col px-2">{% include figure.liquid loading="eager" path="assets/img/u-mamba2/tf3/best_2d_gt.png" class="img-fluid rounded z-depth-1" zoomable="true" %}</div>
    <div class="col px-2">{% include figure.liquid loading="eager" path="assets/img/u-mamba2/tf3/best_3d_pred.png" class="img-fluid rounded z-depth-1" zoomable="true" %}</div>
    <div class="col px-2">{% include figure.liquid loading="eager" path="assets/img/u-mamba2/tf3/best_2d_pred.png" class="img-fluid rounded z-depth-1" zoomable="true" %}</div>
  </div>
  <div class="row">
    <div class="col px-2">{% include figure.liquid loading="eager" path="assets/img/u-mamba2/tf3/worst_3d_gt.png" class="img-fluid rounded z-depth-1" zoomable="true" %}</div>
    <div class="col px-2">{% include figure.liquid loading="eager" path="assets/img/u-mamba2/tf3/worst_2d_gt.png" class="img-fluid rounded z-depth-1" zoomable="true" %}</div>
    <div class="col px-2">{% include figure.liquid loading="eager" path="assets/img/u-mamba2/tf3/worst_3d_pred.png" class="img-fluid rounded z-depth-1" zoomable="true" %}</div>
    <div class="col px-2">{% include figure.liquid loading="eager" path="assets/img/u-mamba2/tf3/worst_2d_pred.png" class="img-fluid rounded z-depth-1" zoomable="true" %}</div>
  </div>
  <div class="row text-center mb-3">
    <div class="col px-4">Ground Truth</div>
    <div class="col px-4">Prediction</div>
  </div>
</div>

#### **U-Mamba2-SSL**
For STSR 2025, we observe that our method can accurately differentiate between the tooth and different classes of pulp and root canal. The failure cases of our method typically stem from the inability to precisely predict the thickness and the length or extent of the pulp. Moreover, our model also struggles with limited field of view (LFOV) CBCTs where it predicts more false positives around the image edges.

<div class="container">
  <div class="row">
    <span>Qualitative results of U-Mamba2-SSL on the internal validation set. The 3D render and a representative 2D slice are shown for: (Top) the best scoring case and (Bottom) the worst scoring case.</span>
  </div>
  <div class="row">
    <div class="col px-2">{% include figure.liquid loading="eager" path="assets/img/u-mamba2/stsr/best_3d_gt.png" class="img-fluid rounded z-depth-1" zoomable="true" %}</div>
    <div class="col px-2">{% include figure.liquid loading="eager" path="assets/img/u-mamba2/stsr/best_2d_gt.png" class="img-fluid rounded z-depth-1" zoomable="true" %}</div>
    <div class="col px-2">{% include figure.liquid loading="eager" path="assets/img/u-mamba2/stsr/best_3d_pred.png" class="img-fluid rounded z-depth-1" zoomable="true" %}</div>
    <div class="col px-2">{% include figure.liquid loading="eager" path="assets/img/u-mamba2/stsr/best_2d_pred.png" class="img-fluid rounded z-depth-1" zoomable="true" %}</div>
  </div>
  <div class="row">
    <div class="col px-2">{% include figure.liquid loading="eager" path="assets/img/u-mamba2/stsr/worst_3d_gt.png" class="img-fluid rounded z-depth-1" zoomable="true" %}</div>
    <div class="col px-2">{% include figure.liquid loading="eager" path="assets/img/u-mamba2/stsr/worst_2d_gt.png" class="img-fluid rounded z-depth-1" zoomable="true" %}</div>
    <div class="col px-2">{% include figure.liquid loading="eager" path="assets/img/u-mamba2/stsr/worst_3d_pred.png" class="img-fluid rounded z-depth-1" zoomable="true" %}</div>
    <div class="col px-2">{% include figure.liquid loading="eager" path="assets/img/u-mamba2/stsr/worst_2d_pred.png" class="img-fluid rounded z-depth-1" zoomable="true" %}</div>
  </div>
  <div class="row text-center mb-3">
    <div class="col px-4">Ground Truth</div>
    <div class="col px-4">Prediction</div>
  </div>
</div>

#### **Ablation Study**
We analyse the effectiveness of our method by studying the effect of the incorporated dental knowledge for U-Mamba2, and the three semi-supervisied learning stages for U-Mamba2-SSL.

| Label Smoothing | Weighted Loss | L/R Mirroring | Dice | HD95 | Dice (ILN) | HD95 (ILN) |
|-----------------|---------------|---------------|------|------|------|------|
| ❌ | ❌ | ❌ | 0.867 | 42.36 | 0.617 | 38.41 |
| ✅ | ❌ | ❌ | 0.872 | 40.74 | 0.628 | 38.15 |
| ❌ | ✅ | ❌ | 0.870 | 41.31 | 0.635 | 37.99 |
| ❌ | ❌ | ✅ | 0.871 | 41.20 | 0.642 | 36.48 |
| ✅ | ✅ | ✅ | **0.873** | **41.08** | **0.646** | **35.21** |

Ablation Study of U-Mamba2 for the internal validation set of Task 1. ILN indicates the metrics for the left and right incisive nerves and the lingual nerve. <br>

| Pre-training | Consistency Regularisation | Pseudo Labeling | Dice | NSD | mIoU | IA | Average | 
|------------|------------|------------|-------|-------|-------|-------|----------------|
| ❌ | ❌ | ❌ | 0.965 | 0.998 | 0.930 | 0.464 | 0.839 |
| ✅ | ❌ | ❌ | 0.967 | 0.998 | 0.937 | 0.731 | 0.908 |
| ✅ | ✅ | ❌ | 0.967 | 0.999 | 0.935 | 0.736 | **0.910** |
| ✅ | ✅ | ✅ | 0.967 | 0.999 | 0.935 | 0.738 | **0.910** |

Ablation Study of U-Mamba2-SSL for the validation set of STSR2025.

### **Challenges Results**
[We won all three segmentation challenges](https://www.kcl.ac.uk/news/kings-phd-student-triumphs-at-prestigious-international-medical-imaging-conference) in the ODIN 2025 workshop at MICCAI 2025, including Tasks 1 and 2 of the ToothFairy3 challenge, and Task 1 of the STSR 2025 challenge.

Leaderboard: [ToothFairy 3](https://toothfairy3.grand-challenge.org/challenge-winners); [Task 1](https://www.codabench.org/competitions/6468/#/results-tab) in STSR 2025.

### **Presentation Slides**
<div class="container">
  <iframe src="/assets/pdf/u-mamba2_slides.pdf" class="w-100" height="300px"></iframe>
  <iframe src="/assets/pdf/u-mamba2-ssl_slides.pdf" class="w-100" height="300px"></iframe>
</div>

<hr style="height:10px;"/>

### **BibTeX**
```bibtex
@inproceedings{u-mamba2,
   title={U-Mamba2: Scaling State Space Models for Dental Anatomy Segmentation in CBCT}, 
   author={Zhi Qin Tan and Xiatian Zhu and Owen Addison and Yunpeng Li},
   year={2025},
   booktitle={Medical Image Computing and Computer Assisted Intervention (MICCAI)},
   maintitle={Workshop on Oral and Dental Image Analysis (ODIN)},
}

@inproceedings{u-mamba2-ssl,
   title={U-Mamba2-SSL for Semi-Supervised Tooth and Pulp Segmentation in CBCT}, 
   author={Zhi Qin Tan and Xiatian Zhu and Owen Addison and Yunpeng Li},
   year={2025},
   booktitle={Medical Image Computing and Computer Assisted Intervention (MICCAI)},
   maintitle={Workshop on Oral and Dental Image Analysis (ODIN)},
}
```
