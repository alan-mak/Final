class CreateMessages < ActiveRecord::Migration[6.1]
  def change
    create_table :messages do |t|
      t.integer :channel_id
      t.string :channel_name
      t.integer :sender_id
      t.integer :recipient_id
      t.string :text

      t.timestamps
    end
  end
end
