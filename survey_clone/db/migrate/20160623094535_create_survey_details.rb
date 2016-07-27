class CreateSurveyDetails < ActiveRecord::Migration
  def change
      create_table :survey_details do |t|
      # Completa con las columnas que necesites
      t.integer :survey_id 
      t.integer :user_id
    end
  end
end