class AddAttachmentImageToArtists < ActiveRecord::Migration[5.1]
  def self.up
    change_table :artists do |t|
      t.attachment :image
    end
  end

  def self.down
    remove_attachment :artists, :image
  end
end
