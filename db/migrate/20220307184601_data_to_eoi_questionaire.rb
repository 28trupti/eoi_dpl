class DataToEoiQuestionaire < ActiveRecord::Migration[6.1]
  def change
    add_column  :eoi_questionaires, :form_data , :jsonb 
    add_column  :eoi_questionaires, :user_id, :integer 
    add_column  :eoi_questionaires, :completed, :boolean, default: :false
  end
end
