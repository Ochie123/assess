import React from 'react';
import MKBox from 'components/MKBox';
import MKTypography from 'components/MKTypography';


export default function CommentSummaryChart() {
 // const { id } = useParams();
  //const { ownerId } = useParams();


  return (
    <>
    <div className="row">
    <MKBox
            bgColor="white"
            borderRadius="xl"
            shadow="lg"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            mt={{ xs: 0, sm: 0, md: 9 }}
            mb={{ xs: 20, sm: 18, md: 20 }}
            mx={0}
          >
    <MKBox
              variant="gradient"
              bgColor="info"
              coloredShadow="info"
              borderRadius="lg"
              p={2}
              mx={2}
              mt={-3}
            >
              <MKTypography variant="h5" color="white">
                Chat with Monesiter
              </MKTypography>
            </MKBox>
      <div className="col-12 col-lg-12 max-height-400 overflow-scroll shadow-xs rounded-3 pt-1">
        
        <div className="card card-plain">
  
          <div className="card shadow-xs mb-4">
  
        <div className="d-flex">

        <div className="ps-4">
    
  
          Anyone can have an idea; it ́s what you do with the idea that ́s the important thing. – Terry Pratchett 

Prefer the standard to the offbeat. – Strunk & White 

The time you enjoy wasting is not wasted time. – Bertrand Russell 

If the code and the comments disagree, then both are probably wrong. – Norm Schryer 

The purpose of computing is insight, not numbers. – R. W. Hamming 
... but for the student, numbers are often the best road to insight. – A. Ralston 

Keep it simple: as simple as possible, but no simpler. – A. Einstein 

Keep Calm and Carry On. – English slogan 

Knowledge is of two kinds. We know a subject ourselves, or we know where 
we can find information on it. – Samuel Johnson 

The first thing we do, let’s kill all the language lawyers. – Henry VI, Part II 

When you wish to instruct, be brief. – Cicero 
Perfection is achieved only on the point of collapse. – C. N. Parkinson 

The sublime and the ridiculous are often so nearly related that it is difficult to class them separately. – Thomas Paine 

Form a more perfect Union. – The people 

Don’t interrupt me while I’m interrupting. – Winston S. Churchill 
Those types are not “abstract”; they are as real as int and float. – Doug McIlroy 
Ignorance more frequently begets confidence than does knowledge. – Charles Darwin 
When I use a word it means just what I choose it to mean – neither more nor less. – Humpty Dumpty 

Premature optimization is the root of all evil. – Donald Knuth 
On the other hand, we cannot ignore efficiency. – Jon Bentley 

Now is a good time to put your work on a firm theoretical basis. – Sam Morgan 

It ain’t what you don’t know that gets you into trouble. It’s what you know for sure that just ain’t so. – Mark Twain 
For every complex problem, there is an answer that is clear, simple, and wrong. 
– H. L. Mencken 

Euclid’s and Beethoven’s Fifth; knowing just one of them marks you as semi-educated. – Stan Kelley-Bootle 

Trips to fairly unknown regions should be made twice; once to make mistakes and once to correct them. – John Steinbeck 

Never express yourself more clearly than you are able to think. – Niels Bohr 
Many secrets of art and nature are thought by the unlearned to be magical. – Roger Bacon 

It was new. It was singular. It was simple. 
It must succeed! – H. Nelson 

The reason that STL containers and algorithms work so well together is that they know nothing of each other. – Alex Stepanov 

        </div>
      </div>
      </div> 

          </div>
        </div>
     

      <br/>
</MKBox>

    </div>

    </>
    
  );
};