import pandas as pd
import  pickle

# df = pd.read_csv("hb.csv")
# reviews = df["Review"]
# with open("hb_reviews.pkl", "wb") as f:
#     pickle.dump(reviews, f)
#################

with open("hb_reviews.pkl", "rb") as f:
    reviews = pickle.load(f)

for review in reviews[:10]:
    print(review)