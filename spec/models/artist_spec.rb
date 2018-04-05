require 'rails_helper'

RSpec.describe Artist, type: :model do
  describe 'validations' do
    subject(:artist) { Artist.new(email: "email@example.com", password: "password", name: "Username") }

    it { should validate_presence_of(:name) }
    it { should validate_presence_of(:session_token) }
    it { should validate_presence_of :password_digest }
    it { should validate_presence_of(:email) }
    it { should validate_uniqueness_of(:email) }
    it { should validate_length_of(:password).is_at_least(6) }
  end

  describe 'associations' do
    it { should have_many(:tracks) }
    it { should have_many(:comments) }
  end

  describe 'class methods' do
    describe '::find_by_credentials' do
      it 'should return matching artist by email and password' do
        artist = Artist.create(email: "email@example.com", password: "password", name: "Username")
        expect(Artist.find_by_credentials("email@example.com", "password")).to eq(artist)
        expect(Artist.find_by_credentials("email@example.com", "passwor")).to be(nil)
      end
    end
  end
end
