class CreateSurveys < ActiveRecord::Migration
  def change
    create_table :surveys do |t|
      # Completa con las columnas que necesites
      t.string :title
      t.integer :user_id #creator of the survey
    end
  end
end
