Feature: Modakrakyat Career Web - Chek Conten
  As user can open main web career modal rakyat

    Scenario: Lihat peluang karir
       Given user can open main web modalrakyat
        When user directed to mainweb user can see title
        When user click menu karir
        Then user click button lihat peluang
          And user can see list position

    Scenario: play video
        Given user can open main web modalrakyat
         When user directed to mainweb user can see title
         When user click menu karir
         Then user click play video
          And user click close video
    
    Scenario: Verify Testimoni
        Given user can open main web modalrakyat
         When user directed to mainweb user can see title
         When user click menu karir
         Then user click arrow next
            And user click arrow prev

    Scenario: View detail position
        Given user can open main web modalrakyat
         When user directed to mainweb user can see title
         When user click menu karir
         Then user click position
         Then user can see detail position
         Then user click back
            And user directed to career page



        