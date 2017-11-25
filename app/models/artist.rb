class Artist < ApplicationRecord
  validates :name, :session_token, :password_digest, presence: true
  validates :email, presence: true, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }

  has_many :Tracks

  after_initialize :ensure_session_token

  def ensure_session_token
    self.session_token ||= generate_session_token
  end

  def reset_session_token!
    self.session_token = generate_session_token
    self.save!
    self.session_token
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    pw_hash = BCrypt::Password.new(self.password_digest)
    pw_hash.is_password?(password)
  end

  def self.find_by_credentials(email, password)
    artist = Artist.find_by(email: email)
    artist && artist.is_password?(password) ? artist : nil
  end

  attr_reader :password

  private

  def generate_session_token
    SecureRandom.urlsafe_base64(16)
  end

end
