class CreateAnswers < ActiveRecord::Migration
  def change
      create_table :answers do |t|
      # Completa con las columnas que necesites
      t.integer :question_id 
      t.string :text
    end
  end
end