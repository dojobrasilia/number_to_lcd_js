describe("lcd", function(){
  
  it("deve desehar o 1",function(){
    result = "   \n" +
             "  |\n" +
             "  |\n" +
             "   \n";
             
    expect(lcd(1)).toBe(result)
  });

  it("deve desehar o 2",function(){
    result = " _ \n" +
             " _|\n" +
             "|_ \n" +
             "   \n";
             
    expect(lcd(2)).toBe(result)
  });
  
  it("deve desehar o 3",function(){
    result = " _ \n" +
             " _|\n" +
             " _|\n" +
             "   \n";
             
    expect(lcd(3)).toBe(result)
  });

  it("deve desenhar o 4",function(){
    result = "   \n" +
             "|_|\n" +
             "  |\n" +
             "   \n";
             
    expect(lcd(4)).toBe(result)
  });
  
  it("deve desenhar o 5",function(){
    result = " _ \n" +
             "|_ \n" +
             " _|\n" +
             "   \n";
             
    expect(lcd(5)).toBe(result)
  });
  
  it("deve desenhar o 6",function(){
    result = " _ \n" +
             "|_ \n" +
             "|_|\n" +
             "   \n";
             
    expect(lcd(6)).toBe(result)
  });

  it("deve desenhar o 7",function(){
    result = " _ \n" +
             "| |\n" +
             "  |\n" +
             "   \n";
             
    expect(lcd(7)).toBe(result)
  });
  
  it("deve desenhar o 8",function(){
    result = " _ \n" +
             "|_|\n" +
             "|_|\n" +
             "   \n";
             
    expect(lcd(8)).toBe(result)
  });
  
  it("deve desenhar o 9",function(){
    result = " _ \n" +
             "|_|\n" +
             " _|\n" +
             "   \n";
             
    expect(lcd(9)).toBe(result)
  });
  
  it("deve desenhar o 0",function(){
    result = " _ \n" +
             "| |\n" +
             "|_|\n" +
             "   \n";
             
    expect(lcd(0)).toBe(result)
  });

});