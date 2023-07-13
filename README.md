# Bird Classification in Aves Class

This repository contains the code and data for classifying 42 different bird species in the Aves class of the Animal Kingdom.

## Table of Contents
- [Dataset](#dataset)
- [Model](#model)
- [Results](#results)
- [Usage](#usage)
- [HuggingFace](#deployed model)
- [License](#license)

## Dataset
The dataset used for training the model consists of over 11,000 bird images, with each order represented by approximately 250-300 images. The images were collected from various sources and carefully labeled with the corresponding bird species.

## Model
The classification model used in this project is ResNet101, a deep convolutional neural network known for its excellent performance in image classification tasks. The model has been pre-trained on a large dataset and fine-tuned on the bird image dataset to improve its accuracy and ability to classify bird species.

## Results
After training the model, the following results were achieved:

Epoch | Train Loss | Valid Loss | Error Rate | Accuracy |
------|------------|------------|------------|----------|
0     | 0.381994   | 0.207986   | 0.060047   | 0.939953 |

The model shows promising performance with a low validation loss, low error rate, and high accuracy. It demonstrates its ability to accurately classify bird species based on the provided dataset.

## Usage
To use this code and replicate the bird classification, please follow the instructions in the repository. Make sure to have the necessary dependencies installed and the dataset properly configured.

## Deployed Model
Visit this space on HuggingFace test the model - https://huggingface.co/spaces/dipro7/aves-order-classifier

## License
MIT License

Copyright (c) 2023 Mehrab Mashrafi

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
