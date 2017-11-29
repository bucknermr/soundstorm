json.key_format! camelize: :lower

artists = {}
artists[@track.artist_id] = @track.artist

json.set! :track do
  json.partial! '/api/tracks/track', track: @track
end

json.comments({})
json.comments do
  @track.comments.each do |comment|
    json.set! comment.id do
      json.partial! '/api/comments/comment', comment: comment
    end
    artists[comment.author_id] = comment.author
  end
end

json.artists(artists)
