from django.shortcuts import render
from twitter import *

# Create your views here.
def home(request):
    # Add communication with Twitter API
    twitter = Twitter(auth=OAuth('','','zTqBv602REkzmxbD8ZqjEA52A','7lQyJJHyrzxbt7B6yGogXPuEuwlLpuRsOPTcXmPo2EmcEVWNct'))
    mapleTimeline = twitter.statuses.user_timeline(screen_name="MapleCroftRisk")
    topTweets = mapleTimeline[:10]

    tweetText = []
    for each in topTweets:
        tweetText.append(each["text"])

    args = {"tweetText":tweetText}
    return render(request, 'tweets/home.html', args)
