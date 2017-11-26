class Track < ApplicationRecord
  validates :title, presence: true
  has_attached_file :audio
  validates :audio, attachment_presence: true
  validates_attachment_file_name :audio, matches: [/mp3\z/, /wav\z/]
  has_attached_file :image
  validates_attachment_file_name :image,
    matches: [/png\z/, /jpe?g\z/]
    # unless: proc { |a| a[:image].nil? }



  # validates_attachment :audio, presence: true,
  # content_type: { content_type: "image/jpeg" },
  # size: { in: 0..10.kilobytes }


  belongs_to :artist

end
