class EoiQuestionairesController < ApplicationController
  include Rails.application.routes.url_helpers
  skip_before_action :verify_authenticity_token
  before_action :set_eoi_questionaire, only: %i[ show edit update destroy ]

  # GET /eoi_questionaires or /eoi_questionaires.json
  def index
    @eoi_questionaires = EoiQuestionaire.all
  end

  # GET /eoi_questionaires/1 or /eoi_questionaires/1.json
  def show
  end

  # GET /eoi_questionaires/new
  def new
    @eoi_questionaire = EoiQuestionaire.new
  end

  # GET /eoi_questionaires/1/edit
  def edit
  end

  # POST /eoi_questionaires or /eoi_questionaires.json
  def create
    @eoi_questionaire = EoiQuestionaire.new(form_data: params[:data])
    @eoi_questionaire.user_id = current_user.id
    respond_to do |format|
      if @eoi_questionaire.save
        format.html { redirect_to thankyou_url, notice: "Eoi questionaire was successfully created." }
        format.json { render json: {id: @eoi_questionaire }, status: :created, location: @eoi_questionaire }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @eoi_questionaire.errors, status: :unprocessable_entity }
      end
    end
  end

  def thankyou
  end

  # PATCH/PUT /eoi_questionaires/1 or /eoi_questionaires/1.json
  def update
    respond_to do |format|
      if @eoi_questionaire.update(eoi_questionaire_params)
        format.html { redirect_to eoi_questionaire_url(@eoi_questionaire), notice: "Eoi questionaire was successfully updated." }
        format.json { render :show, status: :ok, location: @eoi_questionaire }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @eoi_questionaire.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /eoi_questionaires/1 or /eoi_questionaires/1.json
  def destroy
    @eoi_questionaire.destroy

    respond_to do |format|
      format.html { redirect_to eoi_questionaires_url, notice: "Eoi questionaire was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_eoi_questionaire
      @eoi_questionaire = EoiQuestionaire.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def eoi_questionaire_params
      params.fetch(:eoi_questionaire, :file ,:user_id)
    end
end
