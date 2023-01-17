class Solution:
    
    def searchMatrix(self, matrix: list[list[int]], target: int) -> bool:
        
        column_length = len(matrix[0])
        row_len = len(matrix)
        
        left = 0
        right = (column_length * row_len)
        
        while left <= right:
            
            current = (left + right) // 2
            print('The current', current)
            curr_row = current // column_length
            curr_col = current % column_length

            if matrix[curr_row][curr_col] == target:
            
                return True
            
            elif matrix[curr_row][curr_col] > target:
                
                right = current - 1
            
            else:
                
                left = current + 1
            print(left, right) 
        return False
a = Solution()
print(a.searchMatrix([[1,2,5,7],[10,11,16,20],[21,30,31,60]] ,21))