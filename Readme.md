1.getElementByid:
we can find one element form html in js.

getElementsByClassName:
find all html elements of our requried class name.acceses its returns value like an array of elements

querySelector / querySelectorAll:
find first element which matches our requred selector. id,class name, tag name etc we can use as a selector.

on the otherhand,
it return all matching element

2.using createElement() (but it only creates)

let div1=document.createElement("div");
div1.innerText="string";
document.body.appendChild(div1)

3.when happened a event of a button then it moves up to its parent, then grandparent then continue moves upper

like: button ->div -> body ->document

it is called event bubbling

4.one parent element have many children but i set single event listner. when any child's happens any event it bubble up so ,parent can easily listen this event and handle this. This techniqe called event delegtion.

it is usefull because we can handle many child or button using single eventlistener ,easy maintanance

5.preventDefault()
cencelled or stopped the default behavior of an element like form's submit event

stopPropagation()
we can stop event from bubbling using this . so when i click button, event can not bubble up ,it can listen its parent. it also prevents it opposite process capturing.
