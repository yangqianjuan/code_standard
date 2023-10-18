
'use strict';

const path = require('path');
const assert = require('assert').strict;
const stylelint =require('stylelint')


describe('test/stylelint-config',()=>{
  it('default validate',async()=>{
    const filePaths=[path.join(__dirname,'./fixtures/index.css')]
    const result=await stylelint.lint({
      configFile:path.join(__dirname,'../index.js'),
      files:filePaths,
      fix:false
    })
    if(result&&result.errored){
      const filesResult=JSON.parse(result.output||'[]')||[]
      filesResult.forEach(fileResult=>{
        console.log(fileResult.warnings)
      })
      assert.ok(filesResult.length>0)
    }
  })

  it('validate scss',async()=>{
    const filePaths=[path.join(__dirname,'./fixtures/sass-test.scss')]
    const result= await stylelint.lint({
      configFile:path.join(__dirname,'../index.js'),
      files:filePaths,
      fix:false
    })
    if(result&&result.errored){
      const filesResult=JSON.parse(result.output||'[]')||[]
      filesResult.forEach(fileResult=>{
        console.log(file.warnings)
      })
      assert.ok(filesResult.length>0)
    }
    
  })

  it('validate less',async()=>{
    const filesPath=[path.join(__dirname,'./fixtures/less-test.less')]
    const result=await stylelint.lint({
      configFile:path.join(__dirname,'../index.js'),
      files:filesPath,
      fix:false
    })
    if(result&&result.errored){
      const filesResult=JSON.parse(result.output||'[]')||[]
      filesResult.forEach(fileResult=>{
        console.log(fileResult)
      })
      assert.ok(filesResult.length>0)
    }

  })
})
