class AddImageUriToStreams < ActiveRecord::Migration[5.2]
  def change
    add_column :streams, :image_uri, :string
  end
end
