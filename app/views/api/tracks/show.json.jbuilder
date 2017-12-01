json.key_format! camelize: :lower

artists = {}

json.set! :track do
  json.partial! '/api/tracks/track', track: @track
end

artists[@track.artist.id] = @track.artist

json.comments({})
json.comments do
  @track.comments.each do |comment|
    json.set! comment.id do
      json.partial! '/api/comments/comment', comment: comment
    end
    artists[comment.author.id] = comment.author
  end
end

json.artists do
  artists.each do |artist_id, artist|
    json.set! artist_id do
      json.partial! '/api/artists/artist', artist: artist
    end
  end
end
