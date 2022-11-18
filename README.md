# Lab 8 - Starter
Paul Nguyen <br>
A16660828
1) Within a Github action that runs whenever code is pushed. You do not want to do them locally manually because local testing should be frequent and there can be lots of automated test which will take too much time if done frequently. Automated test should not be done at the end because it may catch many problems that have snowballed over time due to not testing frequenly enough.
2) no
3) No. Testing of this message feature should be left for end to end testing since it deals more with direct user interaction and can have a lot of moving parts.
4) Yes. Testing the max message length is a small part of a larger moving application. It can be done quickly without affecting many other parts.