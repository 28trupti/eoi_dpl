require "application_system_test_case"

class EoiQuestionairesTest < ApplicationSystemTestCase
  setup do
    @eoi_questionaire = eoi_questionaires(:one)
  end

  test "visiting the index" do
    visit eoi_questionaires_url
    assert_selector "h1", text: "Eoi Questionaires"
  end

  test "creating a Eoi questionaire" do
    visit eoi_questionaires_url
    click_on "New Eoi Questionaire"

    click_on "Create Eoi questionaire"

    assert_text "Eoi questionaire was successfully created"
    click_on "Back"
  end

  test "updating a Eoi questionaire" do
    visit eoi_questionaires_url
    click_on "Edit", match: :first

    click_on "Update Eoi questionaire"

    assert_text "Eoi questionaire was successfully updated"
    click_on "Back"
  end

  test "destroying a Eoi questionaire" do
    visit eoi_questionaires_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Eoi questionaire was successfully destroyed"
  end
end
