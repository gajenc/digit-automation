# eGov QA Test automation

Observations:
* Initial unwanted calls upon URL call

General:
    - Framework is setup, which demontrates the below
        - Scripting language used is JavaScript, however we can choose TypeScript alternately.
        - Data driving capabilities
        - Adaptable based on test envs
        - Results can be captured with screenshots, video and the history being captured
        - User defined/custom commands are added to handle the iFrame
        - CI Jenkins file is setup to run them as part of a build pipeline.
        - It runs both headless as well as on chrome browser, can run on AWS cloud, jenkins slaves, etc
To-DO:
    * Still lot to add/enhance the coverage and functionalities.


How to run:
* Setup a jenkins job and choose the env to run.
* Or checkout the project on local machine, have cypress node module installed and open this project within cypress to run the e2e spec file. 
* Credetials and user details can be mentioned at "users.js"