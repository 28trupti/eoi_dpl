require "test_helper"

class EoiQuestionairesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @eoi_questionaire = eoi_questionaires(:one)
  end

  test "should get index" do
    get eoi_questionaires_url
    assert_response :success
  end

  test "should get new" do
    get new_eoi_questionaire_url
    assert_response :success
  end

  test "should create eoi_questionaire" do
    assert_difference('EoiQuestionaire.count') do
      post eoi_questionaires_url, params: { eoi_questionaire: {  } }
    end

    assert_redirected_to eoi_questionaire_url(EoiQuestionaire.last)
  end

  test "should show eoi_questionaire" do
    get eoi_questionaire_url(@eoi_questionaire)
    assert_response :success
  end

  test "should get edit" do
    get edit_eoi_questionaire_url(@eoi_questionaire)
    assert_response :success
  end

  test "should update eoi_questionaire" do
    patch eoi_questionaire_url(@eoi_questionaire), params: { eoi_questionaire: {  } }
    assert_redirected_to eoi_questionaire_url(@eoi_questionaire)
  end

  test "should destroy eoi_questionaire" do
    assert_difference('EoiQuestionaire.count', -1) do
      delete eoi_questionaire_url(@eoi_questionaire)
    end

    assert_redirected_to eoi_questionaires_url
  end
end
