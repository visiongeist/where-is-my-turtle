from fastai.vision.all import *
import gradio as gr

# fn is necessary to use the model
def is_cat(x): return x[0].isupper() 

learn = load_learner('model/model.pkl')

categories = ('Dog', 'Cat')

def classify_images(img):
    #'Is it a car?', 'Is it a car? but as zero or one', 'probabillity of [dog, cat]'
    pred, idx, probs = learn.predict(img)
    #return dictionary
    #zip together the categories and the
                                        #turn probs to float
    return dict(zip(categories, map(float, probs)))

# gradio
image = gr.Image() # need to add resizing, shape=(192, 192)
label = gr.Label()
examples = ['examples/dog.jpg']

intf = gr.Interface(fn=classify_images, inputs=image, outputs=label, examples=examples)
intf.launch(inline=False)

m = learn.model

ps = list(m.parameters())

ps[1]