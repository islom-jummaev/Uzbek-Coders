#################################################
text = "this is not a reversed text"

def reverse(x):
    return x[::-1]

print("the reversed text is: "+reverse(text))


################################################

no_list = [22,68,90,78,90,88]

def average(x):
    return sum(x)/len(x)

    
print(average(no_list))

##############################################


no_list = [1,2,3,4]

def maximum(no_list):
    b=max(no_list)
    return b

print(maximum(no_list))
############################################
return max(no_list)

no_list = [22,22,2,1,11,11,2,2,3,3,3,4,5,5,5,55,55,66]
def unique_list(l):
  
    	a=[]
 for i in l:
        if i not in a:
            a.append(i)
    return a
print(unique_list(no_list))
#############################################
