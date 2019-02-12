# About-you QA-challenge

Observations:

* The site is too slow to work on automation, especially while capturing the objects and dry-running, it requires multiple iteration of performing the same task, but the page is frequenly getting broken at multiple places, any stable env would help automating much faster and effectively.

* There are challenges in identifying the objects as there are no attributes specifically added for most of the react ui components to recognize them uniquely, however object recognition can still be done with the best posiible Object identifucation technique. Modt of the ids, classnames are dynamically being generated, it might change when there are new builds being deployed.

* iFrame at the Signup/Sign-in page needs little extra effort to figure out the right pattern to identify them

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