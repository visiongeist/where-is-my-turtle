---
title: Where is my turtle
emoji: 🐢
colorFrom: indigo
colorTo: gray
sdk: gradio
sdk_version: 4.2.0
app_file: app.py
pinned: false
---

# where-is-my-turtle
Detect a known turtle on a photo

1. Run the script to generate the model.pkl
```bash
python train_model.py
```

1. Run backend script for gradio backend
```bash
python app.py
```