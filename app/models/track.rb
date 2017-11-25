class Track < ApplicationRecord
  validates :title, presence: true
  has_attached_file :audio
  validates_attachment_file_name :audio, matches: [/mp3\z/, /wav\z/]
  # validates_attachment_content_type :audio, content_type: /\Aimage\/.*\z/
  # validates_attachment_file_name :audio, matches: [/png\z/, /jpe?g\z/]

  belongs_to :artist

end
