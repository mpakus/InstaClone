class CreatePosts < ActiveRecord::Migration[6.0]
  def change
    create_table :posts do |t|
      t.references :user, null: false, foreign_key: true
      t.string :uid
      t.text :content

      t.timestamps
    end
    add_index :posts, :uid, unique: true
  end
end
