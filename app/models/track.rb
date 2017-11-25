class Track < ApplicationRecord
  validates :title, presence: true
  has_attached_file :audio
  # validates_attachment_content_type :audio, content_type: /\Aimage\/.*\z/

  belongs_to :Artist

end
