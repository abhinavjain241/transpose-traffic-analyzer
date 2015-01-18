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
int flag =1 ;
int counter = 0 ;
//char *temp;
ofstream file1("fb_kol.txt");

ifstream myfile ("facebook.JSON");
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
            string virword;
            myfile>>word1>>word2 ;
            if(isupper(word1[0])&&isupper(word2[0]))
             {
                file1<<word1<<"+";
                for(int i = 1; i<word2.size();i++)
                {
                  if(isupper(word2[i])||islower(word2[i]))
                    virword = virword + word2[i] ;
                  else
                    break;
                }
                if(!(isupper(word2[word2.size()-1])||islower(word2[word2.size()-1])))
                    word2.erase (word2.begin()+word2.size()-1);
                    file1<<word2<<endl;
             }
          }
    vfile.close(); 
   }
    myfile.close();

  file1<<counter<<endl;
  
return 0 ;

}