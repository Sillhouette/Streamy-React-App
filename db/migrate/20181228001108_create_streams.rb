class CreateStreams < ActiveRecord::Migration[5.2]
  def change
    create_table :streams do |t|
      t.string :title
      t.string :description
      t.string :userId
      t.timestamps
    end
  end
end
