class CreateEoiQuestionaires < ActiveRecord::Migration[6.1]
  def change
    create_table :eoi_questionaires do |t|

      t.timestamps
    end
  end
end
