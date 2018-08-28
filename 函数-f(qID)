f(qID):

Values returned 
 
Single:
 The code of the answer.
 
Open, Numeric and Date:
 A string with the answer.
 
Multi:
 A set with the codes of the answers selected.
 
Ranking, OpenText List or Numeric List:
 A set with the codes of the elements in the answer list that are answered.
 
Grid:
 A set with the codes of the elements in the answer list that are answered.
 
"Other" from answer lists:
 A string with the text answered.
 
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
f(qID).domainValues() :

这个方法返回的是出示给被访者的list，如果在访问时，某个code被隐藏了，那么这个方法是不会返回这个code的，在使用时要注意
This will return an array with all codes from the answer list of a single, multi, ranking, open text list, numeric list or grid 
question, headers excluded.

This method is subject to masking, so if a code mask is used to filter the answer list then this will only return the codes of the 
answers that are displayed to the respondent.

The method is also subject to randomization. That is, if the answer list is randomized, then the array will be returned randomized.

For hierarchy and table lookup questions, only the first 500 (server setting: WIMaxExternalLookupEntries) hits are returned. 
If the limit is exceeded, an error is returned.
