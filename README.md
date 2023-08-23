# Aves Order Classifier

This repository contains the code and data for classifying 42 different bird orders in the Aves class of the Animal Kingdom.

## Table of Contents
- [Dataset](#dataset)
- [Handling Bias](#handling-bias)
- [Benchmarking](#benchmarking)
- [Selected Model](#selected-model)
- [Insights](#insights)
- [Discussions](#discussions)
- [Selected Model](#selected-model)
- [Usage](#usage)
- [Model](#model)
- [License](#license)

## Dataset
The dataset used for training the model consists a total of 12,600 bird images, with each order represented by approximately 250-300 images. The images were collected from various sources from the web using the search_images_ddg() function of fastai, and carefully labeled with the corresponding bird order.

## Handling Bias
To minimize the bias in the model, different keywords were used to download an equal number of bird images for each label. Instead of just bird sitting on trees, "flying bird" and other postions were considered as well for maintaining data consistency throughout the dataset.

## Benchmarking

### Model Performance using ResNet152 Fit-One-Cyle
#### Training Details

- **Model**: RESNET152
- **Training Time**: Approximately 40 minutes
- **Batch Size**: 16
- **Learning Rate**: slice(0.0004786300996784123, 1.4454397387453363e-05, None)
- **Model Freezing**: Yes (before training)

Here's a summary of the model's performance on the validation set during the first 5 epochs:

| Epoch | Train Loss | Valid Loss | Error Rate | Accuracy | Time   |
|-------|------------|------------|------------|----------|--------|
| 0     | 4.315430   | 2.982406   | 75.10%     | 24.90%   | 21:24  |
| 1     | 2.664104   | 1.564841   | 43.53%     | 56.47%   | 05:42  |
| 2     | 2.092243   | 1.187572   | 33.65%     | 66.34%   | 05:43  |
| 3     | 1.893896   | 1.089929   | 31.41%     | 68.59%   | 05:42  |
| 4     | 1.785103   | 1.077894   | 30.68%     | 69.31%   | 05:44  |

### Model Performance using ResNet152 Fine-Tuning
#### Training Details

- **Model**: RESNET152
- **Training Time**: Approximately 2 hours
- **Batch Size**: 16
- **Learning Rate**: Not used
- **Model Freezing**: No

Here are the performance metrics of our model fine-tuned using the ResNet152 architecture. The model was trained over a series of epochs, and the following results were obtained:

| Epoch | Train Loss | Valid Loss | Error Rate | Accuracy | Time    |
|-------|------------|------------|------------|----------|---------|
| 0     | 1.482540   | 0.996092   | 26.75%     | 73.25%   | 1:38:10 |
| 0     | 1.267988   | 0.822749   | 23.45%     | 76.55%   | 06:34   |
| 1     | 1.216979   | 0.894785   | 25.38%     | 74.62%   | 06:36   |
| 2     | 0.852755   | 0.644162   | 18.39%     | 81.61%   | 06:37   |
| 3     | 0.521366   | 0.478375   | 13.98%     | 86.02%   | 06:34   |
| 4     | 0.352030   | 0.439929   | 12.69%     | 87.31%   | 06:32   |


### Insights

In the "Model Performance using ResNet152 Fit-One-Cycle" section, the initial epochs demonstrate a considerable disparity between training and validation losses, indicating potential overfitting. Despite an improving accuracy and decreasing error rate, it's clear that the model requires more fine-tuning to achieve a balance between the training and validation phases.

On the other hand, the "Model Performance using ResNet152 Fine-Tuning" section highlights a more controlled approach. The model's progression across epochs is marked by decreasing loss, decreasing error rate, and increasing accuracy. Notably, the error rate drops significantly over the epochs, showcasing the effectiveness of fine-tuning. The training times are also reasonable, with each epoch taking a consistent duration.

Considering these observations, fine-tuning the ResNet152 model appears to be a more favorable approach. The controlled reduction in both loss and error rate along with increasing accuracy signify a more stable convergence towards optimized performance. The approach seems to yield a better trade-off between training and validation phases compared to the Fit-One-Cycle method.


## Discussions

Considering these observations, fine-tuning the ResNet152 model appears to be a more favorable approach. The controlled reduction in both loss and error rate along with increasing accuracy signify a more stable convergence towards optimized performance. The approach seems to yield a better trade-off between training and validation phases compared to the Fit-One-Cycle method.

Additionally, based on our observations, it seems suited that we decrease the number of layers for a better controlled performance. That is why, we are going to train the final model using ResNet101 variation.

## Selected Model
Upon considering our benchmarking results, the classification model used in this project is ResNet101, a deep convolutional neural network known for its excellent performance in image classification tasks. The model has been pre-trained on a large dataset and fine-tuned on the bird image dataset to improve its accuracy and ability to classify bird orders.



### Model Performance on RESNET101 for the First 5 Epochs

This repository contains the performance metrics of our model trained on the RESNET101 architecture for the first 5 epochs. Below are the details of the training process and the corresponding results:

#### Training Details

- **Model**: RESNET101
- **Training Time**: Approximately 24 minutes
- **Batch Size**: 32
- **Learning Rate**: Not Used
- **Model Freezing**: No (before training)

#### Performance Metrics

Epoch | Train Loss | Valid Loss | Error Rate | Accuracy |
----- | ---------- | ---------- | ---------- | -------- |
0     | 1.201289   | 0.965389   | 0.269411   | 0.730589 |
1     | 1.223704   | 0.884236   | 0.224509   | 0.775491 |
2     | 0.811814   | 0.741591   | 0.184284   | 0.815716 |
3     | 0.493227   | 0.625785   | 0.163704   | 0.836296 |
4     | 0.295220   | 0.618716   | 0.148737   | 0.851263 |

The model shows improvement in terms of decreasing loss, error rate, and increasing accuracy as the training progresses. These initial results indicate that the model was learning and becoming more accurate in classifying the bird orders.

After cleaning the data and fine tuning the training the model several times, the following results were achieved:

Epoch | Train Loss | Valid Loss | Error Rate | Accuracy |
------|------------|------------|------------|----------|
0     | 0.381994   | 0.207986   | 0.060047   | 0.939953 |

The model shows promising performance with a low validation loss, low error rate, and high accuracy. It demonstrates its ability to accurately classify bird species based on the provided dataset.

## Usage
To use this code and replicate the bird classification, please follow the instructions in the repository. Make sure to have the necessary dependencies installed and the dataset properly configured.

**Give me a pull request if you want to work with it.**

## Model
Visit this space on HuggingFace test the model - https://huggingface.co/spaces/dipro7/aves-order-classifier

## License
MIT License

Copyright (c) 2023 Mehrab Mashrafi