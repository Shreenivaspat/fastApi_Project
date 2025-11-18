# fastApi_Project
<!-- ecom with fast api - 

Branch Type	    Start From	                     End (Merge Into)
feature	          develop	                          develop
bugfix	          qa/stage/uat	                    same branch, then upward
hotfix	          main	                           main → uat → stage → qa → develop -->

<!-- main
↑
uat
↑
stage
↑
qa
↑
develop
│
├── feature/*
├── bugfix/*
└── hotfix/*  (from main) -->

<!-- for example - 
qa → bugfix/ISBP-410 → PR → qa

stage → bugfix/STAGE-88 → PR → stage

main → hotfix/PAY-17 → PR → main → uat → stage → qa → develop -->


