class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      # Completa con las columnas que necesites
      t.string :username
    end
  end
end
