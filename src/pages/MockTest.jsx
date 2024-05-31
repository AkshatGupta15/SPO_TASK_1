import React from "react";
import CodeEditor from "../components/CodeEditor";
import { useNavigate } from "react-router";

export const MockTest = () => {
    const navigate = useNavigate()
    const questions = [
        {
          id: 1,
          title: "Reverse a Linked List",
          desc: "Given a pointer to the head node of a linked list, the task is to reverse the linked list. We need to reverse the list by changing the links between nodes.",
          example: [
            "Input: Head of following linked list 1->2->3->4->NULL",
            "Output: Linked list should be changed to, 4->3->2->1->NULL",
            "Input: Head of following linked list 1->2->3->4->5->NULL",
            "Output: Linked list should be changed to, 5->4->3->2->1->NULL",
            "Input: NULL Output: NULL",
            "Input: 1->NULL Output: 1->NULL"
          ]
        },
        {
          id: 2,
          title: "Merge two sorted linked lists",
          desc: "Given two sorted linked lists consisting of N and M nodes respectively. The task is to merge both of the lists (in place) and return the head of the merged list.",
          example: [
            "Input a: 5->10->15, b: 2->3->20",
            "Output: 2->3->5->10->15->20",
            "Input a: 1->1, b: 2->4",
            "Output: 1->1->2->4"
          ]
        },
        {
          id: 3,
          title: "Find the Loop in a Linked List",
          desc: "Given a linked list, check if the linked list has a loop or not. If a loop is present, find the starting node of the loop.",
          example: [
            "Input: 1->2->3->4->5->3 (loop)",
            "Output: Loop detected at node 3",
            "Input: 1->2->3->4->5->NULL",
            "Output: No loop detected"
          ]
        },
        {
          id: 4,
          title: "Detect a Cycle in a Graph",
          desc: "Given a directed graph, check whether the graph contains a cycle or not.",
          example: [
            "Input: Graph with edges (1, 2), (2, 3), (3, 4), (4, 2)",
            "Output: Cycle detected",
            "Input: Graph with edges (1, 2), (2, 3), (3, 4)",
            "Output: No cycle detected"
          ]
        },
        {
          id: 5,
          title: "Find the Longest Palindromic Substring",
          desc: "Given a string, find the longest substring which is a palindrome.",
          example: [
            "Input: 'babad'",
            "Output: 'bab' or 'aba'",
            "Input: 'cbbd'",
            "Output: 'bb'"
          ]
        },
        {
          id: 6,
          title: "Find the Median of Two Sorted Arrays",
          desc: "Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.",
          example: [
            "Input: nums1 = [1, 3], nums2 = [2]",
            "Output: 2.0",
            "Input: nums1 = [1, 2], nums2 = [3, 4]",
            "Output: 2.5"
          ]
        },
        {
          id: 7,
          title: "Longest Common Subsequence",
          desc: "Given two strings text1 and text2, return the length of their longest common subsequence.",
          example: [
            "Input: text1 = 'abcde', text2 = 'ace'",
            "Output: 3",
            "Input: text1 = 'abc', text2 = 'abc'",
            "Output: 3"
          ]
        },
        {
          id: 8,
          title: "Implement a Queue using Stacks",
          desc: "Implement a queue using two stacks.",
          example: [
            "Input: push(1), push(2), pop(), push(3), pop()",
            "Output: 1, 2"
          ]
        },
        {
          id: 9,
          title: "Find All Anagrams in a String",
          desc: "Given a string s and a non-empty string p, find all the start indices of p's anagrams in s.",
          example: [
            "Input: s = 'cbaebabacd', p = 'abc'",
            "Output: [0, 6]",
            "Input: s = 'abab', p = 'ab'",
            "Output: [0, 1, 2]"
          ]
        },
        {
          id: 10,
          title: "Longest Increasing Subsequence",
          desc: "Given an integer array nums, return the length of the longest strictly increasing subsequence.",
          example: [
            "Input: [10, 9, 2, 5, 3, 7, 101, 18]",
            "Output: 4",
            "Input: [0, 1, 0, 3, 2, 3]",
            "Output: 4"
          ]
        },
        {
          id: 11,
          title: "Find the Duplicate Number",
          desc: "Given an array nums containing n + 1 integers where each integer is between 1 and n (inclusive), find the duplicate number.",
          example: [
            "Input: [1, 3, 4, 2, 2]",
            "Output: 2",
            "Input: [3, 1, 3, 4, 2]",
            "Output: 3"
          ]
        },
        {
          id: 12,
          title: "Rotate Image",
          desc: "You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).",
          example: [
            "Input: [[1,2,3],[4,5,6],[7,8,9]]",
            "Output: [[7,4,1],[8,5,2],[9,6,3]]",
            "Input: [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]",
            "Output: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]"
          ]
        }
      ];
      
  return (
    <div className="max-w-screen-xl mx-auto px-10 min-h-screen">
      <div className="pt-32">
        <p className="text-center font-extrabold text-2xl">MOCK CODING TEST</p>
        <div>
            {questions.map((question,i)=>{
                return (
                    <li key={i} className=" font-light text-xl mb-3 hover:text-purple-400">
                      <button onClick={()=> navigate(`/mocktest/${question.id}`)}>  {question.title}</button>
                    </li>
                )
            })}
        </div>
      </div>
    </div>
  );
};
