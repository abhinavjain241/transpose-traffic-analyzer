#include <iostream>
#include <fstream>
#include <cstring>

#include <string>

//std::string front("tweets_KOL_.jpg");
//std::string back(".JSON");
//std::string final;

using namespace std;

int main()
{
//char ch[20] answer ;
string word , word1 , word2 ;//, final ;
string vword ;
string ch;
string front = "tweets_MUM_" ;
string back = ".JSON" ;
int flag =1 ;
int counter = 0 ;
//char *temp;
ofstream file1("mum_twitter.txt");
for(int i = 1 ; i<66;i++) {

    std::string final = front + std::to_string(i) + back;
    //temp = new char[final.length() + 1];
    //strcpy(temp,final.c_str());
//cout<<final<<endl;
ifstream myfile (final.c_str());
 while(!myfile.eof())
  {
     myfile>>word ;
     flag = 0 ;
      ifstream vfile ("prep.txt");
      while(!vfile.eof())
      {
        vfile>>vword;
        if(vword==word) {
          flag= 1 ;counter++; break ;
        }
       }
       if(flag==1)
          {

            myfile>>word1>>word2 ;
            string virword = "";
            if(isupper(word1[0])&&isupper(word2[0]))
             {
                file1<<word1<<"+";
               for(int i = 1; i<word2.size();i++)
                {
                  if(isalpha(word2[i]))
                    virword = virword + word2[i] ;
                  else
                    break;
                }
                
                file1<<word2[0]<<virword<<endl;
             }
          }
    vfile.close(); 
   }
    myfile.close();
  }
  file1<<counter<<endl;
  
return 0 ;

}