# README

# Soundstorm

SoundStorm is a single-page music web application inspired by SoundCloud.

[See it live](https://www.soundstorm.me)

SoundStorm was built with:

* Ruby on Rails
* PostgreSQL
* React
* Redux
* Sass

It is hosted using AWS services (including *RDS, OpsWorks, ELB, EC2, S3, CloudFront,* and *CloudWatch*) to allow for application monitoring and future scalability.

I used the Paperclip gem to manage file attachments to the AWS S3 buckets, which hold uploaded audio and image files. Other dependencies include animate-rails, font-awesome-rails, react-audio-player, and Wavesurfer.js for waveform generation.

## Features
Artists can create accounts, upload and edit songs, and comment on the songs of other artists.

The tracks are played back on a single audio player for continuous playback while browsing the site. One of the biggest challenges in this project was getting the audio player synced up to the corresponding waveforms as they appear and disappear.

I accomplished this by creating an audio reducer, which held reference to the song that is currently playing as well as it's position. While the track is playing, the player dispatches actions to update the position of the waveform in. In addition, the waveform components have a listener which sends its new position if the user chooses to seek using the waveform. The result is that the song that is currently playing stays in lock step throughout the site with any corresponding buttons or waveforms.
