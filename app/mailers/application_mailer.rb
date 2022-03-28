class ApplicationMailer < ActionMailer::Base
  default from: 'MarketingDPL@godeepak.com'
  layout 'mailer'


  def welcome_mail(user)
    @user = user
    mail(to: "nishant@aryannchem.com", bcc: ENV['SEND_MAIL_WITH_BCC']&.split(',') || [],
      subject: 'Form for Expression of Interest | Chemical Distribution | Deepak Phenolics')
  end

  
end
