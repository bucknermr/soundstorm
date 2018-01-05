class Track < ApplicationRecord
  validates :title, presence: true
  has_attached_file :audio
  validates :audio, attachment_presence: true
  validates_attachment_file_name :audio, matches: [/mp3\z/, /wav\z/, /m4a\z/]
  has_attached_file :image
  validates_attachment_file_name :image, matches: [/png\z/, /jpe?g\z/]

  belongs_to :artist

  has_many :comments


  def self.search(term)
    Track.joins(:artist).where("
      tracks.title ILIKE :term OR artists.name ILIKE :term
      ", term: "%#{term}%")
  end

end
