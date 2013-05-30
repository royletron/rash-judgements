class AddProviderAvatarColumnToUsers < ActiveRecord::Migration
  def change
    add_column :users, :provider_avatar, :string
  end
end
