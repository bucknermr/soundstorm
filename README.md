# README

# Soundstorm

Welcome to the repository for [SoundStorm](soundstorm-soundcloud-clone.herokuapp.com). SoundStorm is a single-page music web application designed as a clone of [SoundCloud](https://www.soundcloud.com).

SoundStorm was built with a Ruby on Rails backend (2.3.1), and a React (16.1.1) & Redux (3.7.2) frontend framework.

Audio and image attachemnts are stored on AWS S3 using the aws-sdk gem (along with figaro and paperclip).

Other dependencies include animate-rails, font-awesome-rails, and react-audio-player, and Wavesurfer.js (used for waveform generation).

## Features
Artists can create accounts, upload and edit songs, and comment on the songs of other artists.

The tracks are played back on a single audio player for continuous playback while browsing the site. One of the biggest challenges in this project was getting the audio player synced up to the corresponding waveforms as they appear and disappear.

I accomplished this by creating an audio reducer, which held reference to the song that is currently playing as well as it's position. While the track is playing, the player dispatches actions to update the position of the waveform. In addition, the waveform components have a listener which sends it's new position if the user chooses to seek using the waveform. The result is that the song that is currently playing stays in lock step throughout the site with any corresponding buttons or waveforms.
