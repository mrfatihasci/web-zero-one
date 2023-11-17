 /*         
 create & append anchors to the left-bar with same text of each sections h2. Set href to each anchor.
However this javascript.js file is not necessary now, i wanted to add it in the hope to have a text editor like version in which the users will write their h2 tags and save without writing the left-bar content.
And it still saves time though.
*/

const leftBarHeadings = document.querySelector('.content');
const leftBar = document.querySelector('.left-bar');
var headings= leftBarHeadings.getElementsByTagName('section');
const nuOfHeadings = headings.length;

for(let i=0; i<=nuOfHeadings; i++){                    
    let anchor= document.createElement('a');
    anchor.textContent =   headings[i].getElementsByTagName('h2')[0].textContent;
    anchor.href=`#${i+1}`;
    leftBar.appendChild(anchor);
}