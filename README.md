# Aves Order Classifier

The vast diversity of bird species within the Aves class of the Animal Kingdom has long fascinated scientists and naturalists alike. Traditionally, the classification of birds has relied on meticulous examination of physical attributes, ranging from size and coloration to dietary habits and ecological niches. This age-old practice has formed the foundation of our understanding of avian biodiversity. 

In an era where artificial intelligence (AI) has revolutionized numerous domains, we find ourselves presented with a unique opportunity. What if we could harness the power of AI to enhance our ability to classify and identify birds within this rich tapestry of avian life?

This project seeks to address this question by endeavoring to construct an innovative image classifier model capable of recognizing any bird species on Earth, categorizing them according to their respective orders. In the realm of ornithology, there are a total of 42 distinct orders within the avian class, each order representing a fascinating mosaic of avian diversity, distinct from the others in various ways. This ambitious project aims to harness the capabilities of AI and machine learning to create a tool that not only simplifies the classification process but also opens new avenues for research and understanding within the field of ornithology.

## Table of Contents
- [Dataset](#dataset)
- [Handling Bias](#handling-bias)
- [Benchmarking](#benchmarking)
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

### Model Performance using ResNet152 Fine-Tuning
#### Training Details

- **Batch Size**: 16
- **Learning Rate**: Not used
- **Model Freezing**: No
- **Epoch**: 5

Here are the performance metrics of our model fine-tuned using the ResNet152 architecture. The model was trained over a series of epochs, and the following results were obtained:

| Model       | Train Loss | Valid Loss | Error Rate | Accuracy |
|-------------|------------|------------|------------|----------|
| ResNet101   | 0.295220   | 0.618716   | 0.148737   | 0.851263 |
| ResNet152   | 0.352030   | 0.439929   | 0.126900   | 0.873100 |
| DenseNet201 | 0.262946   | 0.570337   | 0.145833   | 0.854167 |
| VGG16       | 0.899876   | 0.768018   | 0.220257   | 0.779743 |

### Insights

#### Training Loss:

- Among the models, DenseNet201 achieved the lowest training loss (0.262946), indicating that it fits the training data very well. ResNet101 (0.295220) and ResNet152 (0.352030) also performed reasonably well in terms of training loss.
- VGG16 had the highest training loss (0.899876), suggesting that it had more difficulty fitting the training data.

#### Validation Loss:

- ResNet152 obtained the lowest validation loss (0.439929), indicating strong performance in generalization to unseen data. ResNet101 (0.618716) and DenseNet201 (0.570337) also performed reasonably well in terms of validation loss.
- VGG16 had the highest validation loss (0.768018), suggesting potential overfitting.

#### Error Rate:

- ResNet152 had the lowest error rate (0.126900), demonstrating superior accuracy on the validation data.
ResNet101 (0.148737) and DenseNet201 (0.145833) also exhibited low error rates, indicating strong predictive performance.
- VGG16, despite having a higher training and validation loss, still achieved a reasonable error rate of 0.220257.

#### Accuracy:

- ResNet152 achieved the highest accuracy (0.873100), indicating its effectiveness in correctly classifying data instances.
- DenseNet201 (0.854167) and ResNet101 (0.851263) also demonstrated high accuracy levels, though slightly lower than ResNet152.
- VGG16, despite its higher losses, still managed to achieve an accuracy of 0.779743.

## Discussions

Overall, ResNet152 emerges as the top-performing model in terms of accuracy, error rate, and validation loss. It shows a strong ability to generalize and make accurate predictions on unseen data. However, it's essential to consider other factors, such as model complexity, training time, and resource constraints, when selecting the most suitable model for a specific application.

ResNet101, while not the highest in accuracy, provides a good balance between model performance and potential overfitting concerns. It may be favored if there are limitations on computational resources or if avoiding overfitting is a primary concern.

DenseNet201 also performs well and can be a solid choice, particularly if computational resources are available.

VGG16, while providing reasonable results, seems to struggle more with generalization, as indicated by its high validation loss relative to other models.

## Selected Model

Upon considering our benchmarking results, the classification model used in this project is ResNet101, a deep convolutional neural network known for its excellent performance in image classification tasks. The model has been pre-trained on a large dataset and fine-tuned on the bird image dataset to improve its accuracy and ability to classify bird orders.

### Performance Metrics

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