class CreateArtists < ActiveRecord::Migration[5.1]
  def change
    create_table :artists do |t|
      t.string :email, null: false
      t.string :name, null: false
      t.string :image_url
      t.text :bio
      t.string :session_token, null: false
      t.string :password_digest, null: false

      t.timestamps
    end

    add_index :artists, :email, unique: true
    add_index :artists, :session_token
  end
end
