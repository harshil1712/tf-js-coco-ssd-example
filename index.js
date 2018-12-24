import * as cocoSsd from '@tensorflow-models/coco-ssd';

const img = document.getElementById('image');

cocoSsd.load()
  .then(model => model.detect(img))
  .then(predictions => console.log(predictions[0]))
