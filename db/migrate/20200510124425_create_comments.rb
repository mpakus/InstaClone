class CreateComments < ActiveRecord::Migration[6.0]
  def change
    create_table :comments do |t|
      t.references :post, null: false, foreign_key: true
      t.text :content
      t.references :user, null: false, foreign_key: true
      t.string :uid
      t.timestamps
    end
    add_index :comments, :uid, unique: true
  end
end
